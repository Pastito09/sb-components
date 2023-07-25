import './mylabel.css';
export interface Props {
    /**
     * Este es el mensaje que se va a mostrar en la etiqueta
     */
    label?: string;
    /**
     * Este es el tamaño por defecto del label
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Si quiere todo capitalizado
     */
    allCaps?: boolean;
    /**
     * Colores basicos del boton
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Color personalizado de la fuente
     */
    fontColor?: string;
    /**
     *
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor }: Props) => import("react/jsx-runtime").JSX.Element;
