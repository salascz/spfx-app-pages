import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'SimpleTestWebPartStrings';
import SimpleTest, {SimpleTestProps} from './components/SimpleTest';

export interface ISimpleTestWebPartProps {
  color: string;
}

export default class SimpleTestWebPart extends BaseClientSideWebPart<ISimpleTestWebPartProps> {

  public render(): void {
    const element: React.ReactElement<SimpleTestProps> = React.createElement(
      SimpleTest,
      {
        color: this.properties.color
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('color', {
                  label: strings.ColorFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
