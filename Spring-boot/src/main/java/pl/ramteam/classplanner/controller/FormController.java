package pl.ramteam.classplanner.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import pl.ramteam.classplanner.model.Form;
import pl.ramteam.classplanner.service.FormService;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class FormController {

    private final FormService formService;


    @GetMapping("/form")
    public List<Form> getForms(){
        return formService.getForms();
    }

    @PostMapping("/form")
    public Form addForm(@RequestBody Form form){
        return formService.addForm(form);
    }
}
