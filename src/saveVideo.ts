import { Page } from 'playwright-core';
import { PageVideoCapture } from './PageVideoCapture';

export const saveVideo = (
  page: Page,
  savePath: string,
): Promise<PageVideoCapture> => {
  console.log('HEY');
  return PageVideoCapture.start({ page, savePath });
};
