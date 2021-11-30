declare interface ISimpleTestWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  ColorFieldLabel: string;
}

declare module 'SimpleTestWebPartStrings' {
  const strings: ISimpleTestWebPartStrings;
  export = strings;
}
