export enum FilterCompType {
    STRING = "STRING",
    COMBO = "COMBO",
    NUMBER = "NUMBER",
    MULTISELECT = "MULTISELECT",
    DATE = "DATE"
}

export class FilterComp {
    /** Tipo de filtro */
    type: FilterCompType;
    /** Label del campo */
    label: string;
    /** Attributo del formControl */
    attribute: string;
    /** Parámetro de busca */
    searchParam: string;
    /** Permisos */
    permmisions?: string[];
    /** Propiedades especificas*/
    specificProperties?: NumberProperties
    /** Requerido */
    required? : Boolean= false;
    /** Desactivado */
    disabled?: Boolean = false;
}



export class NumberProperties {
    buttonLayout: string;
    spinnerMode: string;
    step: string;
    decrementButtonClass: string;
    incrementButtonClass: string;
    incrementButtonIcon: string;
    decrementButtonIcon: string;
    mode: string;
    currency: string;
    min: number;
    max: number;

}