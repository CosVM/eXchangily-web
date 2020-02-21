import { Component, ViewChild, EventEmitter, Output } from '@angular/core';
import {  ModalDirective } from 'ngx-bootstrap/modal';
import { faAlipay } from '@fortawesome/free-brands-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder } from '@angular/forms';

@Component({
    selector: 'apply-for-merchant-modal',
    templateUrl: './apply-for-merchant.html',
    styleUrls: ['./apply-for-merchant.css']
})
export class ApplyForMerchantModal {
    faAlipay = faAlipay;
    faCreditCard = faCreditCard;
    applyForMerchantModalForm = this.fb.group({
        quantity: ['0'],
        amount: ['0'],
        method: ['alipay']
    });
    @ViewChild('applyForMerchantModal', {static: true}) public applyForMerchantModal: ModalDirective;
    methods: string[] = ['alipay', 'bank'];
    constructor(private fb: FormBuilder) { }
    show() {
        this.applyForMerchantModal.show();
    }

    hide() {
        this.applyForMerchantModal.hide();
    }    
    onSubmit() {
        
    }
}
