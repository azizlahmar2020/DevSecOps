package com.example.springbootesprit.controller;

import com.example.springbootesprit.entities.Etudiant;
import com.example.springbootesprit.service.IEtudiantService;
import lombok.AllArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/etudiant")
@CrossOrigin(origins = "http://localhost:4200")

public class EtudiantController {

    IEtudiantService iEtudiantService;

    @PostMapping(value = "/addEtudiant", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Etudiant addEtudiant(@RequestBody Etudiant e) {
       return iEtudiantService.addEtudiant(e);

    }
    @GetMapping("/allEtudiant")
    List<Etudiant>allEtudiant(){
        return iEtudiantService.getEtudiant();
    }
    @GetMapping("/Etudiant/{id}")
    Etudiant  EtudiantById(@PathVariable Long id)
    {
        return iEtudiantService.getEtudiantById(id);
    }
    @DeleteMapping("/deleteEtudiant/{id}")
    void delete(@PathVariable Long id)
    {
        iEtudiantService.delete(id);
    }
    @PutMapping(value = "/updateEtudiant", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    Etudiant update(@RequestBody Etudiant etudiant)
    {
        return iEtudiantService.update(etudiant);
    }
}
