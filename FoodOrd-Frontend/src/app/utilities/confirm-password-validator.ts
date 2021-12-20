import { AbstractControl } from "@angular/forms";


export default function CompareValidator(control1: string, control2:string){
    return function(group: AbstractControl){
        const controlInstance = group.get(control1);
        const controlInstance2 = group.get(control2);
        if(controlInstance?.value !== controlInstance2?.value){
            return { compare : { control1 : controlInstance?.value, control2: controlInstance2?.value}}
        }
        return null;
    }
}