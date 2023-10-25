import styled from '@emotion/styled/macro';
import React from 'react';
import { FaHeart, FaStar } from 'react-icons/fa';

import { StoreInfoType } from '@/apis/store/types';

type Props = {
  data: StoreInfoType;
};

export default function StoreInfo({ data }: Props) {
  const {
    id,
    title,
    type,
    delivery_time,
    review_point,
    review_cnt,
    distance,
    delivery_price_range,
    thumImgUrls,
    minimum_price,
    like_cnt,
    comments,
  } = data;
  return (
    <StoreInfoContainer>
      <div className="img-wrap">
        <img src={thumImgUrls[0]} />
        <button type="button" id="btnLike" className="btn-like">
          <i>
            <FaHeart color="white" size={24} />
          </i>
        </button>
      </div>
      <div className="info-wrap">
        <h2 className="title-store">{title}</h2>
        <span className="grade">
          <i className="fa fa-star fa-lg"></i>
          <i>
            <FaStar />
          </i>
          ({review_point})
        </span>
        <div className="review-info">
          <p> 최근리뷰 {review_cnt.toLocaleString()}</p>
          <p> 최근사장님댓글 {comments.toLocaleString()}</p>
        </div>
      </div>
      <div className="deliver-info">
        <dl className="text-info">
          <dt>최소주문금액</dt>
          <dd>{minimum_price.toLocaleString()}원</dd>
        </dl>
        <dl className="text-info">
          <dt>결제 방법</dt>
          <dd>바로결제, 만나서결제, 예약가능</dd>
        </dl>
        <dl className="text-info">
          <dt>배달시간</dt>
          <dd>
            {delivery_time[0]}~{delivery_time[1]}분 소요 예상
          </dd>
        </dl>
      </div>

      <Divider />
    </StoreInfoContainer>
  );
}

const StoreInfoContainer = styled.div`
  .img-wrap {
    position: relative;
    aspect-ratio: 5 / 3;
    overflow: hidden;
    img {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 100%;
      transform: translate(-50%, -50%);
    }
    .btn-like {
      position: absolute;
      right: 15px;
      top: 15px;
      color: #fff;
      &.active {
        color: orangered;
      }
    }
  }
  .info-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    max-width: 450px;
    width: calc(100% - 60px);
    background-color: #fff;
    margin: 0 auto;
    padding: 20px 20px;
    margin-top: -40px;
    border: 1px solid #ddd;
    border-radius: 3px;
    box-shadow: -1px -1px 9px -1px rgba(0, 0, 0, 0.25);

    .title-store {
      font-size: 24px;
      font-weight: 500;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .grade {
      display: flex;
      align-items: center;
      margin: 5px 0;
      font-size: 16px;
      i {
        margin-right: 5px;
        font-size: 16px;
        color: orange;
      }
    }

    .review-info {
      display: inline-flex;
      font-size: 15px;
      color: #888;
      p {
        &:not(:last-child) {
          &:after {
            content: '|';
            display: inline-block;
            margin: 0 5px;
          }
        }
      }
    }
  }
  .deliver-info {
    padding: 20px 30px;
    .text-info {
      display: flex;
      font-size: 14px;
      color: #666;
      &:not(:last-of-type) {
        margin-bottom: 10px;
      }
      dt {
        flex: 0 0 90px;
        width: 90px;
      }
    }
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 8px;
  background-color: #f4f4f4;
  border-top: 1px solid #ededed;
`;
