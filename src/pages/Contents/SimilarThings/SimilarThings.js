import React, { Component } from 'react';
import './SimilarThings.scss';

class SimilarThings extends Component {
  render() {
    return (
      <section className="similar-things">
        <h2 className="title medium-title">비슷한 작품</h2>
        <div className="similar-content">
          <ul className="similarcontent-all">
            <li className="similarcontent">
              <a href="/">
                <div>
                  <img
                    src="/images/bb2e1eaf00d3d86b835e3d8e6a30523a.jpeg"
                    className="similarcontent-poster"
                    alt="비슷한 작품 포스터"
                  />
                </div>
                <div className="similar-title medium-text">블랙위도우</div>
                <p className="similar-star small-text">평균 ★ 4.2</p>
                <p className="similar-genre tiny-text">영화</p>
              </a>
            </li>
          </ul>{' '}
        </div>
      </section>
    );
  }
}

export default SimilarThings;