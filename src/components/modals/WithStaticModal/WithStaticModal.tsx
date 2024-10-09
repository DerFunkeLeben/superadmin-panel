import { Component } from 'react';

import { Entity, StaticModalProps, StaticModalState, StaticModalWrappedComponent } from './types';

const WithStaticModal = <T extends Entity>(WrappedComponent: StaticModalWrappedComponent<T>) => {
  return class StaticModal extends Component<StaticModalProps, StaticModalState> {
    static instance?: StaticModal = undefined;

    static show(data?: T) {
      if (!StaticModal.instance) return;
      StaticModal.instance.data = data;
      StaticModal.instance.show();
    }

    static hide() {
      if (!StaticModal.instance) return;
      StaticModal.instance.data = undefined;
      StaticModal.instance.hide();
    }

    constructor(props: any) {
      super(props);

      this.state = {
        isOpen: false,
      };

      StaticModal.instance = this;

      this.show = this.show.bind(this);
      this.hide = this.hide.bind(this);
    }

    data: T | undefined = undefined;

    show() {
      this.setState({ isOpen: true });
    }

    hide() {
      this.setState({ isOpen: false });
    }

    render() {
      if (!this.state.isOpen) {
        return null;
      }

      const props = {
        onClose: this.hide,
        data: this.data,
        isOpen: this.state.isOpen,
      };

      return <WrappedComponent {...props} />;
    }
  };
};

export default WithStaticModal;
