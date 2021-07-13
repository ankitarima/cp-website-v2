import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml'
})
export class SafeHtmlPipe implements PipeTransform {

  constructor(protected sanitizer: DomSanitizer) {}

 public transform(value: any): SafeHtml {
   const decodedValue = unescape(escape(value));
  //  console.log(decodedValue);
  return this.sanitizer.bypassSecurityTrustHtml(decodedValue);

  }
}
