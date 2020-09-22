export interface Prediction{
    tag: string
    probability: number
}

export function getIconType(tag): string {
    if(tag === "sexy"){
        return 'wine';
    }
    else if(tag == 'formal' ){
        return 'briefcase'
    }
    else if(tag == 'romantico' ){
        return 'heart'
    }

}