package br.com.ufabcplan.config.security.auth;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import br.com.ufabcplan.aluno.Aluno;
import br.com.ufabcplan.aluno.AlunoRepository;

@Service
public class AutenticacaoService implements UserDetailsService {

	@Autowired
    private AlunoRepository alunoRepository;

    @Override
    public UserDetails loadUserByUsername(String ra) throws UsernameNotFoundException {
        Optional<Aluno> aluno = alunoRepository.findByRa(ra);
        if(aluno.isPresent()) return aluno.get();

        throw new UsernameNotFoundException("Dados inválidos");
    }

}
