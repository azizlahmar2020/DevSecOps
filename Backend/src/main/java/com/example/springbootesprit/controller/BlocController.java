package com.example.springbootesprit.controller;

import com.example.springbootesprit.entities.Bloc;
import com.example.springbootesprit.service.IBlocService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@AllArgsConstructor
@RequestMapping("/Bloc")
@CrossOrigin(origins = "http://localhost:4200")

public class BlocController {
    IBlocService blocServiceImp;
    
    @PostMapping(value = "/addBloc", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    Bloc addBloc( @RequestBody   Bloc bloc)
    {
        return blocServiceImp.addBloc(bloc);
    }
    @GetMapping("/bloc/{id}")
    Bloc retrieveBloc(@PathVariable Long id)
    {
        return blocServiceImp.getBlocById(id);
    }


    @GetMapping("/allBloc")
    List<Bloc>retrieveBlocs(){
        return blocServiceImp.getAllBlocs();
    }

    @DeleteMapping("/deleteBloc/{id}")
    void deleteBloc(@PathVariable Long id)
    {
        blocServiceImp.delete(id);
    }

    @DeleteMapping("/deleteBloc")
    void deleteBloc(@RequestBody Bloc bloc) {
        blocServiceImp.deleteBloc(bloc);
    }
    @PutMapping(value = "/updateBloc", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    Bloc updateBloc(@RequestBody Bloc bloc)
    {
        return blocServiceImp.update(bloc);
    }

    @PutMapping(value = "/updateBlocA/{id}", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    Bloc updateBlocById(@RequestBody Bloc bloc)
    {
        return blocServiceImp.update(bloc);
    }



    @GetMapping("/recherche/{nomBloc}")
    public ResponseEntity<List<Bloc>> rechercheAvanceeBloc(@PathVariable("nomBloc") String nomBloc) {
        List<Bloc> blocs = blocServiceImp.rechercherParNom(nomBloc);
        return new ResponseEntity<>(blocs, HttpStatus.OK);
    }


    @GetMapping("/nom/{nomBloc}")
    public ResponseEntity<List<Bloc>> getByBloc(@PathVariable String nomBloc) {
        List<Bloc> blocs = blocServiceImp.rechercherBloc(nomBloc);
        return new ResponseEntity<>(blocs, HttpStatus.OK);
    }



    @GetMapping("/percentage/{idBloc}")
    public Map<String, Double> getPercentageByBloc(@PathVariable long idBloc) {
        return blocServiceImp.calculatePercentageByBloc(idBloc);
    }

    @PutMapping("/affecterFoyerABloc/{idFoyer}/{idBloc}")
    public void affecterChambreABloc(@PathVariable long idFoyer, @PathVariable long idBloc) {
         blocServiceImp.affecterBlocAuFoyer(idFoyer,idBloc);
    }

    @GetMapping("/countreservationchambre/{idBloc}")
    public int getcountreservationchambre(@PathVariable long idBloc) {
        return blocServiceImp.getNombreChambresReserveesSurBloc(idBloc);
    }


    @GetMapping("/BlocDispo/{idbloc}")
    public Boolean blocdispo(@PathVariable long idbloc){
        return blocServiceImp.estBlocComplet(idbloc);
    }

}
