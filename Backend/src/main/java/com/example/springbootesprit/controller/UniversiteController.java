package com.example.springbootesprit.controller;

import com.example.springbootesprit.entities.Universite;
import com.example.springbootesprit.service.IUniversiteService;
import lombok.AllArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/Universite")
@CrossOrigin(origins = "http://localhost:4200")
public class UniversiteController {

   IUniversiteService universiteService;

    @GetMapping ("/retrive-all-universites")
    public List<Universite> getUniversites() {
        List<Universite> universiteList = universiteService.getAllUniversite();
        return universiteList;
    }

    @GetMapping ("/retrieve-universite/{universite-id}")
    public  Universite retrieveUniversite (@PathVariable("universite-id") Long universiteId){
        return universiteService.getUniversiteById(universiteId);
    }

    @PostMapping(value = "/add-universite", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Universite addUniversite (@RequestBody Universite u) {
        Universite universite=universiteService.addUniversite(u);
        return universite;
    }

    @DeleteMapping ("/remove-universite/{universite-id}")
    public void removeUniversite (@PathVariable ("universite-id") Long universiteId) {
        universiteService.delete(universiteId);
    }

    @PutMapping(value = "/update-universite", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Universite updateUniversite (@RequestBody Universite u) {
        Universite universite=universiteService.update(u);
        return universite;
    }


}