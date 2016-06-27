interface IComposition extends IRenderTarget {
    layers : Array<ILayer>;
    render(params: Object) : Promise<void>;
}
