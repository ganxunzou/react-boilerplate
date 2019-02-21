import React, { Component } from 'react';
import uuidv1 from 'uuid/v1';
import styles from './index.css';

const engCharNumberLowerCaseKeys = [
  [
    { idx: 0, lbl: '1' },
    { idx: 1, lbl: '2' },
    { idx: 2, lbl: '3' },
    { idx: 3, lbl: '4' },
    { idx: 4, lbl: '5' },
    { idx: 5, lbl: '6' },
    { idx: 6, lbl: '7' },
    { idx: 7, lbl: '8' },
    { idx: 8, lbl: '9' },
    { idx: 9, lbl: '0' },
  ],
  [
    { idx: 10, lbl: 'q' },
    { idx: 11, lbl: 'w' },
    { idx: 12, lbl: 'e' },
    { idx: 13, lbl: 'r' },
    { idx: 14, lbl: 't' },
    { idx: 15, lbl: 'y' },
    { idx: 16, lbl: 'u' },
    { idx: 17, lbl: 'i' },
    { idx: 18, lbl: 'o' },
    { idx: 19, lbl: 'p' },
  ],
  [
    { idx: 20, lbl: 'a' },
    { idx: 21, lbl: 's' },
    { idx: 22, lbl: 'd' },
    { idx: 23, lbl: 'f' },
    { idx: 24, lbl: 'g' },
    { idx: 25, lbl: 'h' },
    { idx: 26, lbl: 'j' },
    { idx: 27, lbl: 'k' },
    { idx: 28, lbl: 'l' },
  ],
  [
    { idx: 29, lbl: 'z' },
    { idx: 30, lbl: 'x' },
    { idx: 31, lbl: 'c' },
    { idx: 32, lbl: 'v' },
    { idx: 33, lbl: 'b' },
    { idx: 34, lbl: 'n' },
    { idx: 35, lbl: 'm' },
  ],
];

const engCharNumberUpperCaseKeys = [
  [
    { idx: 0, lbl: '1' },
    { idx: 1, lbl: '2' },
    { idx: 2, lbl: '3' },
    { idx: 3, lbl: '4' },
    { idx: 4, lbl: '5' },
    { idx: 5, lbl: '6' },
    { idx: 6, lbl: '7' },
    { idx: 7, lbl: '8' },
    { idx: 8, lbl: '9' },
    { idx: 9, lbl: '0' },
  ],
  [
    { idx: 36, lbl: 'Q' },
    { idx: 37, lbl: 'W' },
    { idx: 38, lbl: 'E' },
    { idx: 39, lbl: 'R' },
    { idx: 40, lbl: 'T' },
    { idx: 41, lbl: 'Y' },
    { idx: 42, lbl: 'U' },
    { idx: 43, lbl: 'I' },
    { idx: 44, lbl: 'O' },
    { idx: 45, lbl: 'P' },
  ],
  [
    { idx: 46, lbl: 'A' },
    { idx: 47, lbl: 'S' },
    { idx: 48, lbl: 'D' },
    { idx: 49, lbl: 'F' },
    { idx: 50, lbl: 'G' },
    { idx: 51, lbl: 'H' },
    { idx: 52, lbl: 'J' },
    { idx: 53, lbl: 'K' },
    { idx: 54, lbl: 'L' },
  ],
  [
    { idx: 55, lbl: 'Z' },
    { idx: 56, lbl: 'X' },
    { idx: 57, lbl: 'C' },
    { idx: 58, lbl: 'V' },
    { idx: 59, lbl: 'B' },
    { idx: 60, lbl: 'N' },
    { idx: 61, lbl: 'M' },
  ],
];

const engSpecialCharKeys = [
  [
    { idx: 62, lbl: '[' },
    { idx: 63, lbl: ']' },
    { idx: 64, lbl: '{' },
    { idx: 65, lbl: '}' },
    { idx: 66, lbl: '#' },
    { idx: 67, lbl: '%' },
    { idx: 68, lbl: '^' },
    { idx: 69, lbl: '*' },
    { idx: 70, lbl: '+' },
    { idx: 71, lbl: '=' },
  ],
  [
    { idx: 72, lbl: '_' },
    { idx: 73, lbl: '\\' },
    { idx: 74, lbl: '|' },
    { idx: 75, lbl: '~' },
    { idx: 76, lbl: '<' },
    { idx: 77, lbl: '>' },
    { idx: 78, lbl: '€' },
    { idx: 79, lbl: '￡' },
    { idx: 80, lbl: '￥' },
    { idx: 81, lbl: '·' },
  ],
  [
    { idx: 82, lbl: '-' },
    { idx: 83, lbl: '/' },
    { idx: 84, lbl: ':' },
    { idx: 85, lbl: ';' },
    { idx: 86, lbl: '(' },
    { idx: 87, lbl: ')' },
    { idx: 88, lbl: '$' },
    { idx: 89, lbl: '&' },
    { idx: 90, lbl: '@' },
    { idx: 91, lbl: '"' },
  ],
  [
    { idx: 92, lbl: '.' },
    { idx: 93, lbl: ',' },
    { idx: 94, lbl: '?' },
    { idx: 95, lbl: '!' },
    { idx: 96, lbl: "'" },
  ],
];

export default class KeyBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUpperCase: false,
      isSpecialChar: false, // 是否切换到特殊字符
    };
  }

	switchKeyboardKeys = () => {
	  console.log('xxx');
	  const { isSpecialChar } = this.state;
	  this.setState({
	    isSpecialChar: !isSpecialChar,
	  });
	};

	keydownHandle = (key) => {
	  const { onKeyDown } = this.props;
	  onKeyDown && onKeyDown(key);
	};

	onDeleteKeyDownHandle = () => {
	  const { onDeleteKeyDown } = this.props;
	  onDeleteKeyDown && onDeleteKeyDown();
	};

	render() {
	  const { hidePwd } = this.props;
	  const { isUpperCase, isSpecialChar } = this.state;
	  let keyboardKeys = null;
	  if (isSpecialChar) {
	    keyboardKeys = engSpecialCharKeys;
	  } else {
	    keyboardKeys = isUpperCase ? engCharNumberUpperCaseKeys : engCharNumberLowerCaseKeys;
	  }

	  return (
			<div className={styles.keyboardContainer}>
				<div className={styles.keyboardTitle}>交通银行安全键盘</div>
				<div>
					<ul className={styles.line10}>
						{keyboardKeys[0].map(item => (
							<li
  key={uuidv1()}
  onClick={() => {
									this.keydownHandle(item);
								}}
							>
								{item.lbl}
							</li>
						))}
					</ul>
					<ul className={styles.line10}>
						{keyboardKeys[1].map(item => (
							<li
  key={uuidv1()}
  onClick={() => {
									this.keydownHandle(item);
								}}
							>
								{item.lbl}
							</li>
						))}
					</ul>
					<ul className={styles.line10} style={{ padding: isSpecialChar ? 0 : '0 0.2rem' }}>
						{keyboardKeys[2].map(item => (
							<li
  key={uuidv1()}
  onClick={() => {
									this.keydownHandle(item);
								}}
							>
								{item.lbl}
							</li>
						))}
					</ul>
					<ul className={styles.line10}>
						<li
  style={{ flex: isSpecialChar ? 1 : 1.5 }}
  className={isSpecialChar ? styles.keyboardShiftDisabled : styles.keyboardShift}
  onClick={() => {
								!isSpecialChar && this.setState({ isUpperCase: !this.state.isUpperCase });
							}}
						>
							{isUpperCase ? 'x' : 'd'}
						</li>
						{keyboardKeys[3].map(item => (
							<li
  key={uuidv1()}
  onClick={() => {
									this.keydownHandle(item);
								}}
							>
								{item.lbl}
							</li>
						))}
						<li
  style={{ flex: isSpecialChar ? 1 : 1.5 }}
  className={styles.keyboardBackspace}
  onClick={this.onDeleteKeyDownHandle}
						>
							◁
						</li>
					</ul>
					<ul className={styles.keyboardBottom}>
						<li
  style={{ width: '0.88rem' }}
  className={styles.keyboardSwitch}
  onClick={this.switchKeyboardKeys}
						>
							{isSpecialChar ? 'ABC' : '@/#'}
						</li>
						<li
  style={{ width: '1.88rem' }}
  className={styles.keyboardSpace}
  onClick={() => {
								this.keydownHandle(' ');
							}}
						>
							空格
						</li>
						<li
  style={{ width: '0.88rem', background: '#0d6dd6', color: '#fff' }}
  onClick={hidePwd}
						>
							确定
						</li>
					</ul>
				</div>
			</div>
	  );
	}
}
