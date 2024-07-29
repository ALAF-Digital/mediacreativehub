export function getActiveListItem(linkTo: string, pathname: string) {
  if (pathname === linkTo) {
    return true;
  } else if (linkTo === "/") {
    return false;
  } else {
    return pathname.includes(linkTo);
  }
}
