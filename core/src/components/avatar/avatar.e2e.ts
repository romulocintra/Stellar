import { newE2EPage } from '@stencil/core/testing';

describe('stellar-avatar', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<stellar-avatar></stellar-avatar>');
    const element = await page.find('stellar-avatar');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<stellar-avatar></stellar-avatar>');
    const component = await page.find('stellar-avatar');
    const element = await page.find('stellar-avatar >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('first', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });
});