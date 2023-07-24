import './mylabel.css';
import { AllCaps } from '../stories/components/MyLabel.stories';


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
}


export const MyLabel = ({
    label = 'No Label',
    size = 'normal',
    allCaps = false,
    color = 'primary',
    fontColor
 }: Props) => {
  return (
    <span 
      className={ `label ${size} text-${color}`}
      style={{ color: `${fontColor}` }}
    >
        { allCaps ? label.toUpperCase() : label }
    </span>
  )
}
