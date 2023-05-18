package fr.iut.rdv3000.controllers;

import fr.iut.rdv3000.models.Client;
import fr.iut.rdv3000.models.Employee;
import fr.iut.rdv3000.repositories.EmployeeRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employee")
public class EmployeeController {

    private final EmployeeRepository repository;

    public EmployeeController(EmployeeRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Employee> getAll() {
        return repository.findAll();
    }

    @GetMapping(value = "{id}")
    public ResponseEntity<Employee> getOne(@PathVariable final Long id) {
        return repository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Employee create(@RequestBody final Employee newEmployee) {
        Employee employeeReceived = new Employee(newEmployee.getFirstName(), newEmployee.getLastName(), newEmployee.getPosition());
        return repository.saveAndFlush(employeeReceived);
    }

    @PutMapping(value = "{id}")
    public ResponseEntity<Employee> update(@PathVariable Long id, @RequestBody final Employee employee) {
        return repository.findById(id)
                .map(employeeBdd -> {
                    employeeBdd.setFirstName(employee.getFirstName());
                    employeeBdd.setLastName(employee.getLastName());
                    employeeBdd.setPosition(employee.getPosition());
                    Employee updatedEmployee = repository.saveAndFlush(employeeBdd);
                    return ResponseEntity.ok(updatedEmployee);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping(value = "{id}")
    public ResponseEntity<Object> delete(@PathVariable Long id) {
        return repository.findById(id)
                .map(employee -> {
                    repository.deleteById(id);
                    return ResponseEntity.ok().build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
