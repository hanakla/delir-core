abstract class CompositionBase implements ICompositon {
    settings : CompositionSetting;
    layers : Array<ILayer>;

    constructor() {
        settings = new CompositionSetting();
    }

    async render(frame: IFrameInfo) {}
}
