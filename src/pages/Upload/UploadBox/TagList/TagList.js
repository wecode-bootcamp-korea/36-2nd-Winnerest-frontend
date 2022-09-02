import React, { useState } from 'react';
import * as S from './TagListStyle';

const TagList = ({ selectTag }) => {
  const [checkedList, setCheckedList] = useState([]);

  const onCheckedElement = e => {
    e.target.checked
      ? setCheckedList([...checkedList, e.target.id])
      : setCheckedList(checkedList.filter(element => element !== e.target.id));
  };

  return (
    <S.ProductCheckList>
      <S.CheckBoxList>
        {TAG_ID.map(({ tag_id, name }) => {
          return (
            <S.CheckBoxs key={tag_id}>
              <S.CheckBox
                type="checkbox"
                id={tag_id}
                onClick={() => selectTag(checkedList)}
                onChange={e => {
                  onCheckedElement(e);
                }}
                checked={checkedList.includes(String(tag_id))}
              />
              <S.TagesTitle>{name}</S.TagesTitle>
            </S.CheckBoxs>
          );
        })}
      </S.CheckBoxList>
    </S.ProductCheckList>
  );
};

export default TagList;

const TAG_ID = [
  {
    tag_id: 1,
    name: '꽃',
  },
  {
    tag_id: 2,
    name: '건물',
  },
  {
    tag_id: 3,
    name: '고양이',
  },
  {
    tag_id: 4,
    name: '강아지',
  },
  {
    tag_id: 5,
    name: '전자기기',
  },
  {
    tag_id: 6,
    name: '풍경',
  },
  {
    tag_id: 7,
    name: '인물',
  },
  {
    tag_id: 8,
    name: '애완동물',
  },
  {
    tag_id: 9,
    name: '음식',
  },
  {
    tag_id: 10,
    name: '운동',
  },
];
