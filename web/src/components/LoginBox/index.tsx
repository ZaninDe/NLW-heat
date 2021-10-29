import { useEffect } from 'react';
import { VscGithubInverted } from 'react-icons/vsc'
import { api } from '../../services/api';

import styles from './styles.module.scss';

type AuthResponse = {
  token: string;
  user: {
    id: string;
    avatar_url: string;
    nome: string;
    login: string;
  }
}

export function LoginBox() {
  const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=e2afc54218ea047feb53`;

async function signIn(githubCode: string) {
  const response = await api.post<AuthResponse>('authenticate', {
    code: githubCode,
  })

  const { token, user } = response.data;

  localStorage.setItem('@dowhile:token', token);

  console.log(user);
}

  // PARTE MUITO IMPORTANTE!!
  // TRATAMENTO DE VERIFICACAO DE AUTENTICACAO

  useEffect(() => {
    const url = window.location.href;
    const hasGithubCode = url.includes('?code=');
//SEPARANDO O TOKEN DA URL
    if(hasGithubCode) {
      const [urlWithoutCode, githubCode] = url.split('?code=');

      console.log({urlWithoutCode, githubCode})

// OCULTANDO O TOKEN DA URL PARA O USER
      window.history.pushState({}, '', urlWithoutCode);

      signIn(githubCode);

    }
  }, [])

  return (
    <div className={styles.loginBoxWrapper}>
      <strong>Entre e compartilhe sua mensagem</strong>
      <a href={signInUrl} className={styles.signInWithGithub}>
        <VscGithubInverted size="24" />
        Entrar com Github
      </a>
    </div>
  )
}