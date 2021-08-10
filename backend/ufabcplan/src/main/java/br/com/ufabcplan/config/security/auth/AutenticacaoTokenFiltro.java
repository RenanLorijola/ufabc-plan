package br.com.ufabcplan.config.security.auth;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import br.com.ufabcplan.aluno.Aluno;

public class AutenticacaoTokenFiltro extends OncePerRequestFilter {

	private TokenService tokenService;

	public AutenticacaoTokenFiltro(TokenService tokenService) {
		this.tokenService = tokenService;
	}

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		String token = recuperarToken(request);

		boolean valido = tokenService.isTokenValido(token);

		if (valido) {
			autenticarUsuario(token);
		}
		filterChain.doFilter(request, response);
	}
	
	private void autenticarUsuario(String token) {
		
		Aluno aluno = tokenService.getAluno(token);;
		
		UsernamePasswordAuthenticationToken authentication = 
				new UsernamePasswordAuthenticationToken(aluno, null, aluno.getAuthorities());
		
		SecurityContextHolder.getContext().setAuthentication(authentication);
	}

	private String recuperarToken(HttpServletRequest request) {
		String token = request.getHeader("Authorization");
		if(token == null || token.isEmpty() || !token.startsWith("Bearer ")) {
			return null;
		}
		return token.substring(7, token.length());
	}

}
