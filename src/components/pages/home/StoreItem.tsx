import styled from '@emotion/styled/macro';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';

import { StoreItemType } from '@/apis/store/types';

type Props = {
  id: string;
  title: string;
  type: 0 | 1 | 2;
  deliveryTime: [number, number];
  reviewPoint: number;
  reviewCnt: number;
  distance: number;
  deliveryPriceRange: [number, number];
  thumImgUrls: [string, string, string];
};

export default function StoreItem({
  id,
  title,
  type,
  deliveryTime,
  reviewPoint,
  reviewCnt,
  distance,
  deliveryPriceRange,
  thumImgUrls,
}: Props) {
  return (
    <Link href={`/store/${id}`}>
      <ImgWrapper>
        <div className="left">
          <img src={thumImgUrls[0]} />
        </div>
        <div className="right">
          <img src={thumImgUrls[1]} />
          <img src={thumImgUrls[2]} />
        </div>
      </ImgWrapper>
      <InfoWrapper>
        <div className="left">
          <div className="title-wrapper">
            <h2 className="title">{title}</h2>
          </div>
          <div className="description">
            <div className="reviews">
              <i>
                <FaStar color="orange" />
              </i>
              <span>
                {reviewPoint} ({reviewCnt.toLocaleString()})
              </span>
            </div>
            <span> {distance}km</span>
            <span>
              {deliveryPriceRange[0].toLocaleString()}원 ~{' '}
              {deliveryPriceRange[1].toLocaleString()}원
            </span>
          </div>
        </div>
        <div className="right">
          <p>
            {deliveryTime[0]} ~ {deliveryTime[1]} 분
          </p>
        </div>
      </InfoWrapper>
    </Link>
  );
}

const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
  border-radius: 20px;
  overflow: hidden;
  aspect-ratio: 16 / 9;
  .left {
    flex: 0 0 70%;
    width: 70%;
    img {
      width: 100%;
      aspect-ratio: 3/4;
      object-fit: cover;
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    flex: 0 0 30%;
    width: 30%;
    height: 100%;
    img {
      aspect-ratio: 1 / 1;
      object-fit: cover;
    }
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  padding: 10px 0;
  .left {
    width: calc(100% - 80px);
    .description {
      display: flex;
      column-gap: 2px;
      font-size: 14px;
      color: #666;
      margin-top: 3px;
      span {
        &:not(:nth-last-of-type(1)) {
          &:after {
            content: '∙';
            display: inline-block;
            margin-left: 2px;
          }
        }
      }
    }
    .reviews {
      display: flex;
      align-items: center;
      // 별 아이콘
      i {
        margin-right: 3px;
        font-size: 13px;
        color: orange;
      }
    }
  }
  .right {
    flex: 0 0 80px;
    width: 80px;
    margin-top: 2px;
    font-size: 15px;
    color: #666;
  }
  .title-wrapper {
    .title {
      font-size: 22px;
      font-weight: 500;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
`;
