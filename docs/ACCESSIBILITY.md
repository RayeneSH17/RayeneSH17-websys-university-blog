# Accessibility Audit Summary

## 1. Baseline Accessibility Results (Before Bootstrap)

- **Lighthouse score (before):** 87
- **Tools used:** Lighthouse, WAVE, axe DevTools
- **Issues found:**
  - ARIA roles not nested correctly (e.g. `role="listitem"` outside expected parent)
  - Missing autocomplete and validation feedback on forms
  - Heading structure skipped levels
  - Navigation not fully responsive or keyboard accessible

## 2. Accessibility After Bootstrap Integration

- **Lighthouse score (after):** 91
- **Tools used:** Lighthouse, WAVE, axe DevTools
- **Improvements:**
  - Semantic Bootstrap navbar with ARIA attributes
  - Responsive layout with proper heading hierarchy
  - Forms now include accessible labels, validation, and feedback
  - Dynamic content uses `aria-live` and `role="listitem"`

## 3. List of Detected Issues and Fixes Applied

### Issue: Navigation menu lacked ARIA and responsiveness  
**Fix:** Replaced with Bootstrap navbar using `aria-label`, `aria-current`, and toggler button with `aria-controls`

### Issue: Dynamic posts not announced by screen readers  
**Fix:** Added `role="list"` to container and `role="listitem"` to each post; used `aria-live="polite"`

### Issue: Form fields lacked accessible validation  
**Fix:** Added `aria-describedby`, `.invalid-feedback`, and `role="alert"` for error messages

### Issue: Heading structure skipped levels  
**Fix:** Reorganized headings to follow logical order (`h1`, `h2`, `h3`)

### Issue: Images lacked responsive styling  
**Fix:** Added Bootstrap classes like `img-fluid`, `rounded`, and `shadow` for better accessibility

## 4. Comparison of Lighthouse Scores

| Stage              | Score |
|--------------------|-------|
| Before Bootstrap   | 87    |
| After Bootstrap    | 91    |

## 5. Screen Reader Testing Observations

- Skip link is announced and focusable
- Navbar toggler is announced with correct label
- Form error messages are read aloud
- Dynamic posts are announced politely when loaded
- Keyboard navigation works across all interactive elements

## 6. Screenshots Section

The following screenshots are included in the final PDF report:

- Lighthouse before Bootstrap
- Lighthouse after Bootstrap
- WAVE report
- axe DevTools results
- Keyboard navigation test
- Screen reader test (ChromeVox or NVDA)

