interface ILayer extends IRenderingTarget{
    // render(canvas: CanvasRenderingContext2D, parameters: Array<IParametor>) : Promise<void>
    render(params: Object) : Promise<void>;
}
