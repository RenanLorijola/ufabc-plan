package br.com.ufabcplan.curso.excel;

import br.com.ufabcplan.curso.bachareladointerdiciplinar.BachareladoInterdiciplinar;
import br.com.ufabcplan.curso.bachareladointerdiciplinar.BachareladoInterdiciplinarController;
import br.com.ufabcplan.curso.bachareladointerdiciplinar.BachareladoInterdiciplinarRepository;
import br.com.ufabcplan.curso.cursoespecifico.CursoEspecifico;
import br.com.ufabcplan.curso.cursoespecifico.CursoEspecificoController;
import br.com.ufabcplan.curso.cursoespecifico.CursoEspecificoRepository;
import br.com.ufabcplan.curso.relacionamento.TipoCurso;
import br.com.ufabcplan.curso.relacionamento.disciplina_bachareladointerdiciplinar.DisciplinaBachareladoInterdiciplinarRequest;
import br.com.ufabcplan.curso.relacionamento.disciplina_cursoespecifico.DisciplinaCursoEspecificoRequest;
import br.com.ufabcplan.disciplina.Disciplina;
import br.com.ufabcplan.disciplina.DisciplinaRepository;
import br.com.ufabcplan.disciplina.DisciplinaRequest;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
@Component
public class DisciplinaExcel {

    public static String TYPE = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    static String DISCIPLINA = "Disciplina";
    static String regexTPI = "(\\d+)-(\\d+)-(\\d+)";
    static Disciplina disciplinaSalva;

    @Autowired
    ExcelService service;


    public List<Disciplina> excelParaDisciplna(InputStream input, DisciplinaRepository repository) {
        try {
            Workbook workbook = new XSSFWorkbook(input);

            Sheet sheet = workbook.getSheet(DISCIPLINA);
            Iterator<Row> rows = sheet.iterator();

            List<Disciplina> disciplinas = new ArrayList<>();

            int rowNumber = 0;
            while (rows.hasNext()) {
                Row currentRow = rows.next();

                if (rowNumber == 0) {
                    rowNumber++;
                    continue;
                }
                Iterator<Cell> cellsInRow = currentRow.iterator();

                DisciplinaRequest disciplina = new DisciplinaRequest();

                int cellIdx = 0;
                while (cellsInRow.hasNext()) {
                    Cell currentCell = cellsInRow.next();

                    if (currentCell.toString().length() == 0) {
                        workbook.close();
                        return disciplinas;
                    }
                    switch (cellIdx) {
                        case 1:
                            disciplina.setNome(currentCell.getStringCellValue());
                            break;
                        case 2:
                            Pattern pattern = Pattern.compile(regexTPI, Pattern.MULTILINE);
                            Matcher matcher = pattern.matcher(currentCell.getStringCellValue());
                            matcher.find();
                            disciplina.setTeoria(Integer.parseInt(matcher.group(1)));
                            disciplina.setPratica(Integer.parseInt(matcher.group(2)));
                            disciplina.setIndividual(Integer.parseInt(matcher.group(3)));
                            disciplinaSalva = repository.save(disciplina.toModel());
                            break;
                        case 3:
                            service.relacionarDisciplina(currentCell.getStringCellValue(), disciplinaSalva);
                            break;
                        default:
                            break;
                    }
                    cellIdx++;
                }
                disciplinas.add(disciplina.toModel());
            }
            workbook.close();
            return disciplinas;
        } catch (IOException e) {
            throw new RuntimeException("Falha ao analisar arquivo do Excel: " + e.getMessage());
        }
    }

    public static boolean hasExcelFormat(MultipartFile file) {
        if (!TYPE.equals(file.getContentType())) {
            return false;
        }

        return true;
    }
}
