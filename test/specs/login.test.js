import { expect } from '@wdio/globals'

import homePage from '../pageobjects/home.page.js'

import loginPage from '../pageobjects/login.page.js'

import profilePage from '../pageobjects/profile.page.js'



describe('My Login application', () => {

  it('should login with valid credentials', async () => {

    await homePage.openMenu('profile')

    await loginPage.login('cliente@ebac.art.br', 'GD*peToHNJ1#c$sgk08EaYJQ')

    

    // provavelmente você queria validar algo relacionado ao profilePage, por exemplo:

    await expect(profilePage.userGreeting).toBeExisting();

    await expect(profilePage.userGreeting).toHaveTextContaining('Bem-vindo');

  })

})