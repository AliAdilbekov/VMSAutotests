import type { Page } from 'playwright';
import { isVisible } from '../framework/common-actions';
export class CameraPage {
  
    readonly page: Page;
    
    constructor(page: Page) {
        
        this.page = page;
        
    }

    async clickFullScreen() {
        await this.page.click('//button[@title="Полноэкранный режим"]');
        
    }

    async checkCameraIcon() {
        await this.page.click('.MuiSvgIcon-fontSizeLarge');
        
    }
   
    async createGrid(testCamera:string) {
        await this.page.click('div:nth-child(2) div div:nth-child(2) .MuiButtonBase-root');
        await this.page.type('.MuiDialogContent-root .MuiOutlinedInput-input', testCamera);
        await this.page.click('//span[contains(text(),"Сохранить")]');
        
    }
 
    async deleteGrid() {
        await this.page.click('div:nth-child(2) div div .MuiButtonBase-root');
        await this.page.click('li:nth-child(2) .MuiTreeItem-content .MuiTypography-root.MuiTreeItem-label div div:nth-child(4) .MuiSvgIcon-root path');
        await this.page.click('button:has-text("Удалить")');
        
    }

    async savedGrid() {
        await this.page.click('div:nth-child(2) div div .MuiButtonBase-root');       
        await this.page.click('input[type="radio"]');
        // Click li:nth-child(2) .MuiTreeItem-content .MuiTypography-root.MuiTreeItem-label div div:nth-child(4) .MuiSvgIcon-root path
        await this.page.click('li:nth-child(2) .MuiTreeItem-content .MuiTypography-root.MuiTreeItem-label div div:nth-child(4) .MuiSvgIcon-root path');
        // Click button:has-text("Удалить")
        await this.page.click('button:has-text("Удалить")');
    }

    async changeCamera() {
        await this.page.click('aside div div div >> :nth-match(button, 3)');
        await this.page.check('input[type="checkbox"]');        
    }
    //Кнопка "Открыть в текущей сетке"
    async openCurrentGrid() {
        await this.page.click('button:has-text("Открыть в текущей сетке")');
        
    }
    //Кнопка "Открыть в оптимальной сетке"
    async openOptimalGrid() {
        await this.page.click('button:has-text("Открыть в оптимальной сетке")');
        
    }
    //Кнопка очистки списка камер
    async clearChosedCamera() {
        await this.page.click('.MuiGrid-justify-xs-space-between .MuiButton-label');
        
    }
    //Кнопка очистки списка камер
    async clearChosedCam() {
        await this.page.click('.MuiGrid-justify-xs-space-between .MuiButton-label');
        
    }
    //Открыть дерово Орг
    async openCameraTree() {
        await this.page.click('.MuiButtonBase-root.MuiFab-root');
        
    }
    //Поле поиска в дереве по наименованию Организаций
    async searchInputFieldOrgName(titleOrg:string) {
         await this.page.click('.MuiInputBase-input');
         await this.page.fill('.MuiInputBase-input',titleOrg);

    }
    //Поле поиска в дереве по БИН Организаций
    async searchInputFieldOrgBin(binOrg:string) {
        await this.page.click('.MuiInputBase-input');
        await this.page.fill('.MuiInputBase-input',binOrg);

    }
    //Поле поиска в дереве по наименованию Объекта
    async searchInputFieldObjName(titleObj:string) {
        await this.page.click('.MuiInputBase-input');
        await this.page.fill('.MuiInputBase-input',titleObj);

    }
    //Поле поиска в дереве по БИН Объекта
    async searchInputFieldObjBin(binObj:string) {
        await this.page.click('.MuiInputBase-input');
        await this.page.fill('.MuiInputBase-input',binObj);

    }
    //Поле поиска в дереве по наименованию Камеры
     async searchInputFieldCamName(titleCam:string) {
        await this.page.click('.MuiInputBase-input');
        await this.page.fill('.MuiInputBase-input',titleCam);

    }
    //Поле поиска в дереве по IP камеры
    async searchInputFieldCamIp(ipCam:string) {
        await this.page.click('.MuiInputBase-input');
        await this.page.fill('.MuiInputBase-input',ipCam);

    }
    //Клик по фильтрам 
    async clickFiltrButton() {
        await this.page.click('.filter-icon-gis');
    }
    async clickFiltrPTZBtn() {
        await this.page.click('MuiChip-label');
    }
    async clickFiltrFIXBtn() {
        await this.page.click('MuiChip-label');
    }
    async clickFiltrRecBtn() {
        await this.page.click('MuiChip-label');
    }
    async clickFiltrMonBtn() {
        await this.page.click('MuiChip-label');
    }
    async clickFiltrOffBtn() {
        await this.page.click('MuiChip-label');
    }

}