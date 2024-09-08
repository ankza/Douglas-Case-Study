import { LightningElement,api } from 'lwc';

export default class MyHeader extends LightningElement {
    /*comment Gupta*/
    @api socialDetails
   @api userDetails

   get phoneLink(){
    return 'tel:${this.userDetails.PHONE}'
   }
   get EmailLink(){
    return 'mailto:${this.userDetails.Email}'
   }
   connectedCallback() {
    console.log('socialDetails:', JSON.stringify(this.socialDetails, null, 2))
}

}