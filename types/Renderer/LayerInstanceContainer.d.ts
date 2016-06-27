declare class LayerInstanceContainer implements IRenderTarget {
    plugin: any;
    dimention: LayerDimention;
    layer: ILayer;
    render(params: Object): Promise<void>;
}
