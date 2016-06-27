interface ICompositonFactory<T extends IComposition> {
    info: IPluginMeta;
    class: T;
}
