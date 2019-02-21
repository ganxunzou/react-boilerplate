import React from 'react';
import ReactDOM from 'react-dom';
import KeyBoard from './KeyBoard';

function KeyBoardHeight() {
  const rem = document.documentElement.style.fontSize;
  if (rem && rem.length > 2) {
    return 3.1 * parseFloat(rem.slice(0, rem.length - 2));
  }
}

function hidePwd() {
  const pwdContainer = document.getElementById('pwdContainer');
  const appContainer = document.getElementById('app');
  if (pwdContainer) {
    pwdContainer.style.display = 'none';
  }
  if (appContainer) {
    appContainer.style.top = '0px';
  }
}

function showPwd(target) {
  console.log('offsetTop', window.innerHeight, KeyBoardHeight(), target.offsetTop);
  let pwdContainer = document.getElementById('pwdContainer');
  if (!pwdContainer) {
    pwdContainer = document.createElement('pwdContainer');
    pwdContainer.id = 'pwdContainer';
    document.body.appendChild(pwdContainer);
    ReactDOM.render(
			<KeyBoard
  hidePwd={hidePwd}
  onKeyDown={(item) => {
					target.value += item.idx;
					console.log(target.value);
				}}
  onDeleteKeyDown={() => {
					if (target.value && target.value.length > 0) {
						target.value = target.value.slice(0, target.value.length - 1);
						console.log(target.value);
					}
				}}
			/>,
			pwdContainer,
    );
  }

  const appContainer = document.getElementById('app');
  appContainer.addEventListener('click', (e) => {
    console.log(e.target, target, e.target === target);
    hidePwd();
  });
  pwdContainer.style.display = '';
  appContainer.style.top = '-100px';
}

export { showPwd, hidePwd };
