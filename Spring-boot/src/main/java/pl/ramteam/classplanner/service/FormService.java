package pl.ramteam.classplanner.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.ramteam.classplanner.model.Form;
import pl.ramteam.classplanner.repository.FormRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FormService {

    private final FormRepository formRepository;

    public List<Form> getForms(){
        return formRepository.findAll();
    }

    public Form addForm(Form form){
        return formRepository.save(form);
    }
}
