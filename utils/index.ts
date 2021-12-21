export const extractIDfromUrl = (url: string) => {
  const urlArray = url.split('/');
  url[url.length - 1] === '/' ? urlArray.pop() : null;
  const id = urlArray[urlArray.length - 1];
  return id;
};
