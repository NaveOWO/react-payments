import { Fragment, useState } from "react";
import styled from "styled-components";
import {
  LABEL,
  TEXT_LENGTH,
  PLACEHOLDER,
  ERROR_MESSAGE,
} from "../../../constants/inputInfo";
import { useCardInfoContext } from "../../../hooks/useCardInfoContext";
import { Date } from "../../../type/input";
import { validation } from "../../../validation/input";
import { Input, InputBox } from "../../@common/input/InputBox";
import { InputGroup } from "../../@common/input/inputGroup";
import { InputLabel } from "../../@common/input/inputLabel";

export function ExpiredDate() {
  const { month, year, changeDateInput } = useCardInfoContext();
  const [error, setError] = useState<boolean>(false);

  function checkIsCorrectYear(e: React.FocusEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement;
    if (target.value === "") {
      setError(false);
      return;
    }
    if (!validation.isCorrectYear(target.value)) {
      setError(true);
      return;
    }
    setError(false);
  }

  return (
    <Input<Date>
      inputState={{ value: { month, year }, handleChange: changeDateInput }}>
      <Wrapper>
        <Input.Label>
          <div>만료일</div>
        </Input.Label>
        <Input.Group>
          <Input.Unit
            name="month"
            maxLength={2}
            minLength={TEXT_LENGTH.MONTH}
            placeholder={PLACEHOLDER.MONTH}
            asChild>
            <DateInput />
          </Input.Unit>
          <>/</>
          <Input.Unit
            name="year"
            maxLength={TEXT_LENGTH.YEAR}
            minLength={TEXT_LENGTH.YEAR}
            placeholder={PLACEHOLDER.YEAR}
            onBlur={checkIsCorrectYear}
            asChild>
            <DateInput />
          </Input.Unit>
        </Input.Group>
        {error && <ErrorMessage>{ERROR_MESSAGE.YEAR}</ErrorMessage>}
      </Wrapper>
    </Input>
  );
}

const Wrapper = styled.section`
  width: 13.7rem;
`;

const DateInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  height: 4.5rem;

  padding: 0 1rem;

  background: ${({ theme }) => theme.colors.gray200};
  border-radius: 0.7rem;

  text-align: center;
  outline: none;
`;

const ErrorMessage = styled.div`
  ${({ theme }) => theme.fonts.label}
  color: ${({ theme }) => theme.colors.error};
`;
