interface ILayerFactory {
    meta: IPluginMeta;
    class: typeof ILayer;
    parameters : Array<IParametorDefinition>;
}
