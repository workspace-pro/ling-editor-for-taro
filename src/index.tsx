import React from "react";

import { WebView } from "@tarojs/components";

export const version = "%VERSION%";

export interface Template {}

export interface LingTemplateEditorProps {
  src: string;
  template: Template;
  title?: string;
  onSave?: (template: Template) => void;
}

export default class LingTemplateEditor extends React.Component<LingTemplateEditorProps> {
  handleMessage = msg => {
    const { onSave } = this.props;

    if (onSave) {
      onSave(msg.data.pop());
    }
  };

  render() {
    const { src } = this.props;
    return <WebView src={src} onMessage={this.handleMessage} />;
  }
}
