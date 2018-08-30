/// <reference path="../../../../../dist/preview release/gltf2Interface/babylon.glTF2Interface.d.ts"/>

module BABYLON.GLTF2.Extensions {
    const NAME = "KHR_materials_unlit";

    /**
     * @hidden
     */
    export class Exporter_KHR_materials_unlit implements IGLTFExporterExtension {
        /** Name of this extension */
        public readonly name = NAME;

        /** Defines whether this extension is enabled */
        public enabled = true;

        /** Defines whether this extension is required */
        public required = false;

        /** Reference to the glTF exporter */
        private _exporter: _Exporter;

        constructor(exporter: _Exporter) {
            this._exporter = exporter;
        }
        
        public postExportMaterialAsync(context: string, babylonMaterial: IMaterial): Nullable<Promise<IMaterial>> {
            console.log("postExportMaterialAsync")
            return new Promise((resolve, reject) => {
                if(!babylonMaterial.extensions){
                    babylonMaterial.extensions = {};
                }
                babylonMaterial.extensions["KHR_materials_unlit"] = {};
                resolve(babylonMaterial);             
            });
        }

        public dispose() {
            delete this._exporter;
        }
    }

    _Exporter.RegisterExtension(NAME, exporter => new Exporter_KHR_materials_unlit(exporter));
}