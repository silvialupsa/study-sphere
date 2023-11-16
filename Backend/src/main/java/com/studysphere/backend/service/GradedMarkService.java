package com.studysphere.backend.service;

import com.studysphere.backend.model.GradedMark;
import com.studysphere.backend.repository.GradedMarkRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class GradedMarkService {
    private final GradedMarkRepository gradedMarkRepository;

    public List<GradedMark> getAll() {
        return gradedMarkRepository.findAll();
    }

    public GradedMark findById(Long id) {
        return gradedMarkRepository.findById(id).orElse(null);
    }

    public GradedMark add(GradedMark gradedMark) {
        return gradedMarkRepository.save(gradedMark);
    }


    public GradedMark update(GradedMark updatedGradedMark) {
        return gradedMarkRepository.save(updatedGradedMark);
    }

    public List<GradedMark> findByStudentId(Long id) {
        return gradedMarkRepository.findGradedMarkByStudentId(id);
    }
}
