/*!
* Pidie
* (c) 2018-2019 Tedir Ghazali
* Released under the Apache License 2.0
*/

import './basic/normalize.css';
import './basic/icon.css';
import './basic/layout.css';
import './basic/grid.css';
import './basic/utility.css';
import './basic/list-group.css';
import './basic/card.css';
import './basic/pagination.css';
import './basic/form.css';

import './navbar/navbar.css';
import './post/post.css';

import * as navbar from './navbar/navbar';
import * as post from './post/post';

class Pidie {

  constructor() {
    this.init();
  }

  init() {
    navbar.navbar();
    post.backToTop();
  }

}

export default function pidie() {
  return new Pidie();
}

pidie();