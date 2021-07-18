package br.com.ufabcplan.aluno;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import br.com.ufabcplan.matricula.Matricula;

@Entity
public class Aluno implements UserDetails {

	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotBlank
	@Column(name = "RA", unique = true, nullable = false, length = 20)
	private String ra;
	
	@NotBlank
	@Column(name = "nome", unique = false, nullable = false, length = 50)
	private String nome;
	
	@NotBlank
	@Column(nullable = false, length = 77)
	private String senha;
	
	@OneToOne(mappedBy = "aluno")
	private Matricula matricula;
	
	@ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	private List<Perfil> perfis = new ArrayList<>();

	public Aluno(String ra, String nome, @NotNull @Valid Senha senha, Perfil perfil) {
		this.ra = ra;
		this.senha = senha.hash();
		this.nome = nome;
		this.perfis.add(perfil);
	}
	
	public Aluno() {}

	public Long getId() {
		return id;
	}

	public String getRa() {
		return ra;
	}

	public String getNome() {
		return nome;
	}

	public String getSenha() {
		return senha;
	}

	public Matricula getMatricula() {
		return matricula;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return this.perfis;
	}

	@Override
	public String getPassword() {
		return this.senha;
	}

	@Override
	public String getUsername() {
		return this.ra;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}
	
}