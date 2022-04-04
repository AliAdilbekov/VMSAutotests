import { test, expect } from '@playwright/test';

import { user } from './testdata';
import { HomePage } from '../pages/client-home-page';
import { LoginPage } from '../pages/client-login-page';
import { ArchivePage } from '../pages/client-archive-page';
import { CameraPage } from '../pages/client-camera-page';
import {OrganizationClient} from './testdata';
 // test.beforeAll(async ({ page }) => {
   // const homepage = new HomePage(page);
    //await homepage.open();
   // await new LoginPage(page).login(user.email, user.password)
 // });

  test('Click FullScreen', async ({ page }) => {
      const homepage = new HomePage(page);
      await homepage.open();
      const locator = page.locator('//button[@title="Свернуть"]'); 
      await new LoginPage(page).login(user.email, user.password)
      await new CameraPage(page).clickFullScreen()
      await expect(locator).toBeVisible();
    });

  test('Check Camera Icon', async ({ page }) => {
      const homepage = new HomePage(page);
      const locator = page.locator('.MuiSvgIcon-fontSizeLarge'); 
      await homepage.open();
      await new LoginPage(page).login(user.email, user.password)
      await expect(locator).toBeVisible();
    });   

  test('Check VMS Main Icon', async ({ page }) => {
      const homepage = new HomePage(page);
      const locator = page.locator('//div[@class="MuiToolbar-root MuiToolbar-regular MuiToolbar-gutters"]/div[1]'); 
      await homepage.open();
      await new LoginPage(page).login(user.email, user.password)
      await expect(locator).toBeVisible();
    });     

  test('Check Create Grid', async ({ page }) => {
      const homepage = new HomePage(page);
      const locator = page.locator('.MuiAlert-message'); 
      await homepage.open();
      await new LoginPage(page).login(user.email, user.password)
      await new CameraPage(page).createGrid(user.testCamera);
      await expect(locator).toHaveText(['Сетка успешно добавлена!']);
    });    

  test('Check Delete Grid', async ({ page }) => {
      const homepage = new HomePage(page);
      const locator = page.locator('.MuiAlert-message'); 
      await homepage.open();
      await new LoginPage(page).login(user.email, user.password)
      await new CameraPage(page).deleteGrid()
      await expect(locator).toHaveText(['Сетка успешно добавлена!']);
    });    

  test('Check Saved Grid', async ({ page }) => {
      const homepage = new HomePage(page);
      const locator = page.locator('.MuiAlert-message'); 
      await homepage.open();
      await new LoginPage(page).login(user.email, user.password)
      await new CameraPage(page).savedGrid()
      await expect(locator).toHaveText(['Сетка успешно добавлена!']);
    });    

  test('Check Change Camera', async ({ page }) => {
      const homepage = new HomePage(page);
      const locator = page.locator('.MuiAlert-message'); 
      await homepage.open();
      await new LoginPage(page).login(user.email, user.password)
      await new CameraPage(page).changeCamera()
      await new CameraPage(page).openCurrentGrid()
      await expect(locator).toHaveText(['Сетка успешно добавлена!']);
    });   
// Поиск организаций по наименованию в дереве
  test('Check Organization by Name', async({ page }) => {
      const homepage = new HomePage(page);
      const locator = page.locator('.MuiTreeView-root');
      await homepage.open();
      await new LoginPage(page).login(user.email, user.password)
      await new CameraPage(page).openCameraTree();
      await new CameraPage(page).searchInputFieldOrgName(OrganizationClient.titleOrg);
      await expect(locator).toContainText(OrganizationClient.titleOrg);
    });  
// Поиск организаций по бин в дереве
  test('Check Organization by bin', async({ page }) => {
     const homepage = new HomePage(page);
     const locator = page.locator('.MuiTreeView-root');
     await homepage.open();
     await new LoginPage(page).login(user.email, user.password)
     await new CameraPage(page).openCameraTree();
     await new CameraPage(page).searchInputFieldOrgBin(OrganizationClient.binOrg);
     await expect(locator).toContainText(OrganizationClient.binOrg);
});  
// Поиск объекта по наименованию в дереве
   test('Check Object by Name', async({ page }) => {
     const homepage = new HomePage(page);
     const locator = page.locator('.MuiTreeView-root');
     await homepage.open();
     await new LoginPage(page).login(user.email, user.password)
     await new CameraPage(page).openCameraTree();
     await new CameraPage(page).searchInputFieldObjName(OrganizationClient.titleObj);
     await expect(locator).toContainText(OrganizationClient.titleObj);
});  
// Поиск объекта по бин в дереве
   test('Check Object by bin', async({ page }) => {
     const homepage = new HomePage(page);
     const locator = page.locator('.MuiTreeView-root');
     await homepage.open();
     await new LoginPage(page).login(user.email, user.password)
     await new CameraPage(page).openCameraTree();
     await new CameraPage(page).searchInputFieldObjBin(OrganizationClient.binObj);
     await expect(locator).toContainText(OrganizationClient.binObj);
});  
// Поиск камер по наименованию в дереве
   test('Check Camera by name', async({ page }) => {
     const homepage = new HomePage(page);
     const locator = page.locator('.MuiTreeView-root');
     await homepage.open();
     await new LoginPage(page).login(user.email, user.password)
     await new CameraPage(page).openCameraTree();
     await new CameraPage(page).searchInputFieldCamName(OrganizationClient.titleCam);
     await expect(locator).toContainText(OrganizationClient.titleCam);
});
// Поиск камер по IP в дереве
   test('Check Camera by IP', async({ page }) => {
     const homepage = new HomePage(page);
     const locator = page.locator('.MuiTreeView-root');
     await homepage.open();
     await new LoginPage(page).login(user.email, user.password)
     await new CameraPage(page).openCameraTree();
     await new CameraPage(page).searchInputFieldCamIp(OrganizationClient.ipCam);
     await expect(locator).toContainText(OrganizationClient.ipCam);
});
// Проверка фильтров в дереве
test('Check Filtr', async ({ page }) => {
  const homepage = new HomePage(page);
  const locator = page.locator('.MuiAlert-message'); 
  await homepage.open();
  await new LoginPage(page).login(user.email, user.password)
  await new CameraPage(page).openCameraTree();
  await new CameraPage(page).clickFiltrButton();
  await expect(locator).toContainText('MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 MuiGrid-item MuiGrid-wrap-xs-nowrap');
});
test('Check Filtr Fix', async ({ page }) => {
  const homepage = new HomePage(page);
  const locator = page.locator('.MuiAlert-message'); 
  await homepage.open();
  await new LoginPage(page).login(user.email, user.password)
  await new CameraPage(page).openCameraTree();
  await new CameraPage(page).clickFiltrButton();
  await new CameraPage(page).clickFiltrFIXBtn();
  await expect(locator).toContainText(OrganizationClient.fix);
});
test('Check Filtr Ptz', async ({ page }) => {
  const homepage = new HomePage(page);
  const locator = page.locator('.MuiAlert-message'); 
  await homepage.open();
  await new LoginPage(page).login(user.email, user.password)
  await new CameraPage(page).openCameraTree();
  await new CameraPage(page).clickFiltrButton();
  await new CameraPage(page).clickFiltrPTZBtn();
  await expect(locator).toContainText(OrganizationClient.PTZ);
});
test('Check Filtr Rec', async ({ page }) => {
  const homepage = new HomePage(page);
  const locator = page.locator('.MuiAlert-message'); 
  await homepage.open();
  await new LoginPage(page).login(user.email, user.password)
  await new CameraPage(page).openCameraTree();
  await new CameraPage(page).clickFiltrButton();
  await new CameraPage(page).clickFiltrRecBtn();
  await expect(locator).toContainText(OrganizationClient.rec);
});
test('Check Filtr Mon', async ({ page }) => {
  const homepage = new HomePage(page);
  const locator = page.locator('.MuiAlert-message'); 
  await homepage.open();
  await new LoginPage(page).login(user.email, user.password)
  await new CameraPage(page).openCameraTree();
  await new CameraPage(page).clickFiltrButton();
  await new CameraPage(page).clickFiltrMonBtn();
  await expect(locator).toContainText(OrganizationClient.mon);
});

test('Check Filtr Offline', async ({ page }) => {
  const homepage = new HomePage(page);
  const locator = page.locator('.MuiAlert-message'); 
  await homepage.open();
  await new LoginPage(page).login(user.email, user.password)
  await new CameraPage(page).openCameraTree();
  await new CameraPage(page).clickFiltrButton();
  await new CameraPage(page).clickFiltrOffBtn();
  await expect(locator).toContainText(OrganizationClient.offline);
});