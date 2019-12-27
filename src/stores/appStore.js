// import React, { Component } from 'react';
import { action, observable } from 'mobx';

class AppStore {
    @observable
    headerType;
    constructor() {
        this.headerType = 'normal';
    }

    @action.bound
    setHeaderType(type) {
        this.headerType = type || 'normal';
    }

    getHeaderType() {
        return this.headerType;
    }

}

const appStore = new AppStore();

export default appStore;
export { AppStore };