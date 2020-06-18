/**
 * @license
 * Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

import {LitElement, html, customElement, property, css} from 'lit-element';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-element-2')
export class MyElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
    .btn-sub{
    height: 30px;
     width: 20px;
     padding: 5px;     
     border-radius: 2px;
     border:0;     
    }
    .btn-sub:hover{
      background-color: #24ce0f;      
      border:0;  
      cursor: pointer;
     }
    .btn-add{
      height: 30px;
     width: 20px;
     padding: 5px;
     border-radius: 2px;
     border:0;  
    }
    .btn-add:hover{
      background-color: #24ce0f;      
      border:0;  
      cursor: pointer;
     }    
     .counter{
      height: 40px;
      font-style: bold;    
      color: #24ce0f;
     }
  `;

  /**
   * The name to say "Hello" to.
   */
  @property()
  name = 'Saurabh';

  @property()
  isEven = false;

  /**
   * The number of times the button has been clicked.
   */
  @property({type: Number})
  count = 0;

  render() {
    return html`     
      
      <span class="btn-sub" @click=${this._onClick_sub}>-</span>
      
      <span class="counter">${this.count}</span>
      
      <span class="btn-add" @click=${this._onClick_add}>+</span>
      
    `;
  }

  private _onClick_sub() {
    if(this.count > 0)
      this.count--;     
  }
  
  private _onClick_add() {
    if(this.count < 10)
    this.count++;    
  }

  foo(): string {
    return 'foo';
  }
} 

declare global {
  interface HTMLElementTagNameMap {
    'my-element-2': MyElement;
  }
}
