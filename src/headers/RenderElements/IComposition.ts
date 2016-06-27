interface IComposition extends IRenderingTarget {
    layers : Array<ILayer>;
    render(params: Object) : Promise<void>;
}
