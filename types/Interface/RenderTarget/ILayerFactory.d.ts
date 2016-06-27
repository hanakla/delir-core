interface ILayerFactory<T extends ILayer> {
    info: IPluginMeta;
    class: T;
    parameters: Array<IParametorDefinition>;
}
