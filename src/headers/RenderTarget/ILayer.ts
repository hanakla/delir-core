interface ILayer extends IRenderTarget {
    render(params: Object) : Promise<void>;
}
