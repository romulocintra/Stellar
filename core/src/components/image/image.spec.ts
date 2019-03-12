import { Picture } from './image';

xit('should render and respond to changes appropriately', () => {
    const image = new Picture();
    expect(image.cols).toBe("auto");
});
